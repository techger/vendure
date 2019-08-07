import { createParamDecorator } from '@nestjs/common';
import { GraphQLResolveInfo } from 'graphql';

import { getApiType } from '../common/get-api-type';

/**
 * @description
 * Resolver param decorator which returns which Api the request came though.
 * This is useful because sometimes the same resolver will have different behaviour
 * depending whether it is being called from the shop API or the admin API.
 *
 * Returns a string of type {@link ApiType}.
 *
 * @example
 * ```TypeScript
 *  \@Query()
 *  getAdministrators(\@Api() apiType: ApiType) {
 *      if (apiType === 'admin') {
 *          // ...
 *      }
 *  }
 * ```
 * @docsCategory request
 * @docsPage Decorators
 */
export const Api = createParamDecorator((data, [root, args, ctx, info]) => {
    return getApiType(info);
});
