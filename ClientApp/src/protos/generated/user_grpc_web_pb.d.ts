import * as grpcWeb from 'grpc-web';

import {
  GetUserRequest,
  UserReply} from './user_pb';

export class UserClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  getUser(
    request: GetUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: UserReply) => void
  ): grpcWeb.ClientReadableStream<UserReply>;

}

export class UserPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  getUser(
    request: GetUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<UserReply>;

}

