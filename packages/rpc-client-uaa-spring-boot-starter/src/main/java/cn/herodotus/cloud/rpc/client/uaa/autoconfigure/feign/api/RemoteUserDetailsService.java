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

package cn.herodotus.cloud.rpc.client.uaa.autoconfigure.feign.api;

import cn.herodotus.cloud.module.common.constants.ServiceNameConstants;
import cn.herodotus.stirrup.core.definition.annotation.Inner;
import cn.herodotus.stirrup.core.definition.domain.Result;
import cn.herodotus.stirrup.logic.upms.entity.security.SysUser;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * <p>Description: 远程 User Details 服务 </p>
 *
 * @author : gengwei.zheng
 * @date : 2022/2/17 10:55
 */
@FeignClient(contextId = "remoteUserDetailsService", value = ServiceNameConstants.SERVICE_NAME_UPMS)
public interface RemoteUserDetailsService {

    @Inner
    @GetMapping("/security/user/sign-in/{username}")
    Result<SysUser> findByUsername(@PathVariable("username") String username);
}