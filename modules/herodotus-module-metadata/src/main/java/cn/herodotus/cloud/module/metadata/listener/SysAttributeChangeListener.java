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

package cn.herodotus.cloud.module.metadata.listener;

import cn.herodotus.cloud.module.metadata.processor.AttributeTransmitterDistributeProcessor;
import cn.herodotus.stirrup.logic.upms.domain.event.SysAttributeChangeEvent;
import cn.herodotus.stirrup.logic.upms.entity.security.SysAttribute;
import org.apache.commons.lang3.ObjectUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

/**
 * <p>Description: SysSecurityAttribute变更事件监听 </p>
 *
 * @author : gengwei.zheng
 * @date : 2021/8/4 22:18
 */
@Component
public class SysAttributeChangeListener implements ApplicationListener<SysAttributeChangeEvent> {

    private static final Logger log = LoggerFactory.getLogger(SysAttributeChangeListener.class);

    private final AttributeTransmitterDistributeProcessor attributeTransmitterDistributeProcessor;

    public SysAttributeChangeListener(AttributeTransmitterDistributeProcessor attributeTransmitterDistributeProcessor) {
        this.attributeTransmitterDistributeProcessor = attributeTransmitterDistributeProcessor;
    }

    @Override
    public void onApplicationEvent(SysAttributeChangeEvent event) {

        log.debug("[Herodotus] |- SysAttribute Change Listener, response event!");

        SysAttribute sysAttribute = event.getData();
        if (ObjectUtils.isNotEmpty(sysAttribute)) {
            log.debug("[Herodotus] |- Got SysAttribute, start to process SysAttribute change.");
            attributeTransmitterDistributeProcessor.distributeChangedSecurityAttribute(sysAttribute);
        }
    }
}
