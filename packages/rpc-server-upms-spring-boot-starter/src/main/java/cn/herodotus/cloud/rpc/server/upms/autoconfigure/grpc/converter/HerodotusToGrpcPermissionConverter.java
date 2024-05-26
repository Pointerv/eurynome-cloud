/*
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
 *
 * Copyright (c) 2020-2030 郑庚伟 ZHENGGENGWEI (码匠君), <herodotus@aliyun.com> Licensed under the AGPL License
 *
 * This file is part of Herodotus Cloud.
 *
 * Herodotus Cloud is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Herodotus Cloud is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.herodotus.vip>.
 */

package cn.herodotus.cloud.rpc.server.upms.autoconfigure.grpc.converter;

import cn.herodotus.stirrup.grpc.permission.GrpcHerodotusPermission;
import cn.herodotus.stirrup.grpc.permission.GrpcHerodotusPermissions;
import cn.herodotus.stirrup.logic.upms.entity.security.SysPermission;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.core.convert.converter.Converter;

import java.util.List;

/**
 * <p>Description: List<SysPermission> 转  GrpcHerodotusPermissions 转换器</p>
 *
 * @author : gengwei.zheng
 * @date : 2024/3/19 14:40
 */
public class HerodotusToGrpcPermissionConverter implements Converter<List<SysPermission>, GrpcHerodotusPermissions> {
    @Override
    public GrpcHerodotusPermissions convert(List<SysPermission> source) {
        if (CollectionUtils.isNotEmpty(source)) {
            return GrpcHerodotusPermissions.newBuilder().addAllPermissions(toGrpcs(source)).build();
        } else {
            return GrpcHerodotusPermissions.newBuilder().build();
        }
    }

    private List<GrpcHerodotusPermission> toGrpcs(List<SysPermission> sysPermissions) {
        return sysPermissions.stream().map(this::toGrpc).toList();
    }

    private GrpcHerodotusPermission toGrpc(SysPermission sysPermission) {
        return GrpcHerodotusPermission.newBuilder()
                .setPermissionId(sysPermission.getPermissionId())
                .setPermissionCode(sysPermission.getPermissionCode())
                .setPermissionName(sysPermission.getPermissionName())
                .build();
    }
}
