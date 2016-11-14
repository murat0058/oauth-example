using System.Web.Http;
using System.Web.Http.Cors;
using IdentityServer3.AccessTokenValidation;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(MyApp.API.Startup))]

namespace MyApp.API
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var config = new HttpConfiguration();

            config.MapHttpAttributeRoutes();
            config.EnableCors(new EnableCorsAttribute("*", "*", "*"));
            config.Filters.Add(new AuthorizeAttribute()); // We want to enforce authorization everywhere

            // Use camelCase JSON
            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new Newtonsoft.Json.Serialization.CamelCasePropertyNamesContractResolver();

            // Use bearer token auth
            app.UseIdentityServerBearerTokenAuthentication(new IdentityServerBearerTokenAuthenticationOptions
                {
                    Authority = "https://rd-sts.azurewebsites.net/core",
                    RequiredScopes = new[] { "myapp-api" }
                }
            );

            app.UseWebApi(config);
        }
    }
}
