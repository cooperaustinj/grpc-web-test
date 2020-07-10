using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Grpc.Core;
using Microsoft.Extensions.Logging;

namespace UserService
{
    public class UserService : User.UserBase
    {
        private readonly ILogger<UserService> _logger;
        public UserService(ILogger<UserService> logger)
        {
            _logger = logger;
        }

        public override Task<UserReply> GetUser(GetUserRequest request, ServerCallContext context)
        {
            if (request.Id < 1)
            {
                context.Status = new Status(StatusCode.InvalidArgument, "There was an issue here!");
            }
            return Task.FromResult(new UserReply
            {
                Username = "bob123"
            });
        }
    }
}
