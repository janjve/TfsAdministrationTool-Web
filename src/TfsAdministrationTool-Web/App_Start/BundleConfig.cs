using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Optimization;

namespace TfsAdministrationTool_Web
{
    // TODO: This should be replaced by grunt bundle + minification for consistensy - Remember to remove web.optimization reference
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/bundles/app_style")
                .Include("~/Content/Site.css")
                );

            bundles.Add(new ScriptBundle("~/bundles/app_script")
                .Include("~/wwwroot/app/app.module.js")
                .Include("~/wwwroot/app/app.routes.js")
                .IncludeDirectory("~/wwwroot/app/main", "*.js")
                .IncludeDirectory("~/wwwroot/app/shared/menu", "*.js")
                );


            bundles.Add(new StyleBundle("~/bundles/bower_style")
                .Include("~/wwwroot/lib/_bower.min.css")
                );

            bundles.Add(new ScriptBundle("~/bundles/bower_script")
                .Include("~/wwwroot/lib/_bower.min.js")
                );
        }
    }
}
