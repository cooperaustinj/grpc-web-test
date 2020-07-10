#! /bin/bash

protoc --proto_path=$PWD/src/protos --js_out=import_style=commonjs:src/protos/generated --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:src/protos/generated $(find $PWD/src/protos -iname '*.proto')