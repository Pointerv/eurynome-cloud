/*
 * Copyright (c) 2019-2021 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 * Project Name: eurynome-cloud
 * Module Name: eurynome-cloud-upms-logic
 * File Name: OauthScopesService.java
 * Author: gengwei.zheng
 * Date: 2021/1/18 下午6:20
 * LastModified: 2021/1/17 下午7:25
 */

package cn.herodotus.eurynome.upms.logic.service.oauth;

import cn.herodotus.eurynome.rest.base.service.BaseLayeredService;
import cn.herodotus.eurynome.data.base.repository.BaseRepository;
import cn.herodotus.eurynome.upms.api.entity.oauth.OAuth2Scopes;
import cn.herodotus.eurynome.upms.api.entity.system.SysAuthority;
import cn.herodotus.eurynome.upms.logic.repository.oauth.OauthScopesRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

/**
 * <p> Description : OauthScopeService </p>
 *
 * @author : gengwei.zheng
 * @date : 2020/3/19 17:00
 */
@Service
public class OauthScopesService extends BaseLayeredService<OAuth2Scopes, String> {

    private static final Logger log = LoggerFactory.getLogger(OauthScopesService.class);

    @Autowired
    private OauthScopesRepository oauthScopesRepository;

    @Override
    public BaseRepository<OAuth2Scopes, String> getRepository() {
        return oauthScopesRepository;
    }

    public OAuth2Scopes authorize(String scopeId, String[] authorities) {

        log.debug("[Eurynome] |- OauthScopes Service authorize.");

        Set<SysAuthority> sysAuthorities = new HashSet<>();
        for (String authority : authorities) {
            SysAuthority sysAuthority = new SysAuthority();
            sysAuthority.setAuthorityId(authority);
            sysAuthorities.add(sysAuthority);
        }

        OAuth2Scopes OAuth2Scopes = findById(scopeId);
        OAuth2Scopes.setAuthorities(sysAuthorities);

        return saveOrUpdate(OAuth2Scopes);
    }
}
