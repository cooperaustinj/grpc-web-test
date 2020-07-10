/**
 * @fileoverview gRPC-Web generated client stub for user
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.user = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.user.UserClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.user.UserPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.GetUserRequest,
 *   !proto.user.UserReply>}
 */
const methodDescriptor_User_GetUser = new grpc.web.MethodDescriptor(
  '/user.User/GetUser',
  grpc.web.MethodType.UNARY,
  proto.user.GetUserRequest,
  proto.user.UserReply,
  /**
   * @param {!proto.user.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.UserReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.GetUserRequest,
 *   !proto.user.UserReply>}
 */
const methodInfo_User_GetUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.user.UserReply,
  /**
   * @param {!proto.user.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.UserReply.deserializeBinary
);


/**
 * @param {!proto.user.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.UserReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.UserReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.UserClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.User/GetUser',
      request,
      metadata || {},
      methodDescriptor_User_GetUser,
      callback);
};


/**
 * @param {!proto.user.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.UserReply>}
 *     A native promise that resolves to the response
 */
proto.user.UserPromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.User/GetUser',
      request,
      metadata || {},
      methodDescriptor_User_GetUser);
};


module.exports = proto.user;

