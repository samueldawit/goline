const { json } = require('express');

const express = require('express');
const app = express();
const PORT = 8080;

app.listen(

    PORT,
    () => console.log(`its alive on http://localhost:${PORT}`)
)

app.use( express.json() );

app.get('/allpartners', (req, res) => {
    res.status(200).send({
        Partner:'APIMatic,AWS API Gateway,Azure API Gateway,Azure DevOps,BigPanda,BitBucket, BitBucket Pipelines,CircleCI,Coralogix,Datadog,Dropbox,Github,Github Actions,GitLab,GitLab CI/CD,Jenkins,Keen,Lightstep,Micrsoft Power Automate,Microsoft Teams,New Relic,Open API,OpsGenie,PagerDuty,Splunk,Splunk On-Call,Slack,Statuspage,Travis CI,Helios,Appmap,APIsec,Workato,Speedscale,Pynt',
        PartnerLevel:'All',
        Description:'Integrate with our industry-leading API Platform to receive exposure to 20M+ developers across 500K+ organizations and improve developer experience.Integration Partners: Developers and ISVs can build integrations using the various Postman integration pathways (collections, Run in Postman, Postman API etc.). Postman team will provide you resources to help with your building process and visibility amongst our community.Strategic Partners: Integrations that are highly adopted by our users and core to the API lifecycle. Postman team will build native support for strategic integrations and receive expanded GTM support. '
    })


});

app.get('/APIMatic', (req, res) => {
    res.status(200).send({
        Partners:'APIMatic',
        PartnerLevel:'Strategic',
        Description:`Postmans APIMatic integration converts a Postman collection into an API description format such as Swagger, RAML, or API Blueprint, and then periodically backs up the resulting file on GitHub.`
    })
});

app.get('/AWS-API-Gateway', (req, res) => {
            res.status(200).send({
                Partners:'AWS API Gateway',
                PartnerLevel:'Strategic',
                Description:`You can upload your API schemas directly to AWS API Gateway from Postman with this integration. It uses version 2 of the AWS API and only supports HTTP APIs with OpenAPI 3.0 schemas. Once the integration is configured, any new changes to your schema in Postman will also appear in your AWS API Gateway.`

    })
});
app.get('/Azure-API-Gateway', (req, res) => {
        res.status(200).send({
            Partners:'Azure API Gateway',
            PartnerLevel:'Strategic',
            Description:`View deployments for each of your Azure API Management services. You can see the revision history, changelog, and export history. You can also export your API definition from Postman to Azure API Management.`
})
});
app.get('/Azure-DevOps', (req, res) => {
        res.status(200).send({
            Partners:'Azure DevOps',
            PartnerLevel:'Strategic',
            Description:`Sync your Postman APIs to Microsoft Azure DevOps, an open-source Git repository manager.`
        })
            });

app.get('/BigPanda', (req, res) => {
                res.status(200).send({
                    Partners:'BigPanda',
                    PartnerLevel:'Strategic',
                    Description:`BigPanda is an IT systems management platform that aggregates IT alerts to flag high-level IT incidents. Viiew real-time alerts based on the results of your Postman monitors.`
        })
    });
app.get('/BitBucket', (req, res) => {
            res.status(200).send({
                Partners:'BitBucket',
                PartnerLevel:'Strategic',
                Description:`Back up your team's Postman collections with Postman's Bitbucket integration.`
    })
});

app.get('/BitBucket-Pipelines', (req, res) => {
    res.status(200).send({
        Partners:'BitBucket Pipelines',
        PartnerLevel:'Strategic',
        Description:`Bitbucket Pipelines is a CI/CD service that's integrated with Bitbucket Cloud. View the status of builds or start a new build, all from within Postman.`
})
});

app.get('/CircleCI', (req, res) => {
    res.status(200).send({
        Partners:'CircleCI',
        PartnerLevel:'Strategic',
        Description:`CircleCI is a cloud-based (CI/CD) platform. You can view the status of builds or start a new build, all from within Postman.`
})
});

app.get('/Coralogix', (req, res) => {
    res.status(200).send({
        Partners:'Coralogix',
        PartnerLevel:'Strategic',
        Description:`Coralogix is a machine learning-powered log analytics platform that improves the delivery and maintenance process.Configure your Postman Monitors to send metrics to Coralogix, where you can visualize and compare them.`
})
});

app.get('/Datadog', (req, res) => {
    res.status(200).send({
        Partners:'Datadog',
        PartnerLevel:'Strategic',
        Description:`Datadog is a monitoring service for cloud-scale applications. Configure your Postman Monitors to send metrics to Datadog, where you can visualize and compare them with other metrics.`
})
});

app.get('/Dropbox', (req, res) => {
    res.status(200).send({
        Partners:'Dropbox',
        PartnerLevel:'Strategic',
        Description:`Back up and synchronize your Postman collections on Dropbox, keeping your Postman collections and other project files in one place.`
})
});


app.get('/Github', (req, res) => {
    res.status(200).send({
        Partners:'Github',
        PartnerLevel:'Strategic',
        Description:`Back up your Postman collections to GitHub, a cloud-based hosting service for Git repositories.`
})
});


app.get('/Github-Actions', (req, res) => {
    res.status(200).send({
        Partners:'Github Actions',
        PartnerLevel:'Strategic',
        Description:``
})
});

app.get('/GitLab-CICD', (req, res) => {
    res.status(200).send({
        Partners:'GitLab CI/CD',
        PartnerLevel:'Strategic',
        Description:`GitLab CI/CD is integrated with GitLab SaaS and GitLab self-managed. After you set up the integration, you can view the status of builds or start a new build, all from within Postman.`
})
});

app.get('/Jenkins', (req, res) => {
    res.status(200).send({
        Partners:'Jenkins',
        PartnerLevel:'Strategic',
        Description:`Jenkins is an open source automation server that can act as CI/CD hub. you can view the status of builds or start a new build, all from within Postman.`
})
});

app.get('/Keen', (req, res) => {
    res.status(200).send({
        Partners:'Keen',
        PartnerLevel:'Strategic',
        Description:`You can use Keen IO for API-based computation, Amazon S3 backups, and building visualizations and dashboards for your APIs. Connect your Postman Monitor results to Keen Streams with the Postman to Keen Integration.`
})
});

app.get('/Lightstep', (req, res) => {
    res.status(200).send({
        Partners:'Lightstep',
        PartnerLevel:'Strategic',
        Description:`Lightstep Incident Response is an incident response platform from ServiceNow, which offers the ability to observe, assess, resolve, and escalate alerts and issues in enterprise and DevOps applications.`
})
});

app.get('/Micrsoft-Power-Automate', (req, res) => {
    res.status(200).send({
        Partners:'Micrsoft Power Automate',
        PartnerLevel:'Strategic',
        Description:`Microsoft Power Automate enables you to automate workflows between your favorite apps and services to get notifications, synchronize files, collect data, and more. It offers over 140 services with predefined flows that you can implement.`
})
});

app.get('/Microsoft-Teams', (req, res) => {
    res.status(200).send({
        Partners:'Microsoft Teams',
        PartnerLevel:'Strategic',
        Description:`Microsoft Teams is a chat-based workspace available to all Microsoft Office 365 users. This integration enables you to get updates about your Postman team directly in Microsoft Teams.`
})
});

app.get('/NewRelic', (req, res) => {
    res.status(200).send({
        Partners:'New Relic',
        PartnerLevel:'Strategic',
        Description:`New Relic is an application performance management solution to monitor real-time and trending data for your processes or web apps. Using Postman's New Relic integration, you can send Postman monitor results to New Relic.`
})
});

app.get('/OpenAPI', (req, res) => {
    res.status(200).send({
        Partners:'Open API',
        PartnerLevel:'Strategic',
        Description:`You can import your existing OpenAPI 3.0 and 3.1 definitions (OpenAPI Specification) into Postman. Postman supports both YAML and JSON formats. You can choose to upload a file, enter a URL, or directly copy your JSON/YAML.`
})
});

app.get('/OpsGenie', (req, res) => {
    res.status(200).send({
        Partners:'OpsGenie',
        PartnerLevel:'Strategic',
        Description:`Opsgenie is an incident management and alerting tool that enables you to manage alerts. It has several communication features such as SMS, phone calls, and mobile push notifications, and collaboration features such as escalations and schedules.`
})
});

app.get('/PagerDuty', (req, res) => {
    res.status(200).send({
        Partners:'PagerDuty',
        PartnerLevel:'Strategic',
        Description:`PagerDuty is an incident management solution that integrates with monitoring stacks for alerting, on-call scheduling, and automatic escalation of critical incidents.`
})
});

app.get('/Splunk', (req, res) => {
    res.status(200).send({
        Partners:'Splunk',
        PartnerLevel:'Strategic',
        Description:`Splunk is a monitoring service for cloud-scale applications. It combines data from servers, databases, tools, and services to present a unified view of an entire stack. This integration allows you to configure your Postman Monitors to send metrics to Splunk where you can visualize and compare them with other metrics.`
})
});

app.get('/Splunk-On-Call', (req, res) => {
    res.status(200).send({
        Partners:'Splunk On-Call',
        PartnerLevel:'Strategic',
        Description:`Splunk On-Call (formerly VictorOps) is a real-time incident management platform that handles incidents as they occur and prepares for the next one.`
})
});

app.get('/Slack', (req, res) => {
    res.status(200).send({
        Partners:'Slack',
        PartnerLevel:'Strategic',
        Description:`The Postman to Slack integration enables you to send Postman notifications to a Slack channel. You can send the results of a Postman monitor run, notifications received in the Postman notification center, activity in your Team Activity Feed, or uptime monitor notifications.`
})
});

app.get('/Statuspage', (req, res) => {
    res.status(200).send({
        Partners:'Statuspage',
        PartnerLevel:'Strategic',
        Description:`Atlassian Statuspage is an uptime and incident communication tools. You can use Statuspage to create a home page for your customers so they can monitor if subsystems or services within your site are operational, and find out more information on system outages or failures. An example of a Statuspage home page is Postman's status page, located at status.postman.com.`
})
});

app.get('/Travis-CI', (req, res) => {
    res.status(200).send({
        Partners:'Travis CI',
        PartnerLevel:'Strategic',
        Description:`Travis CI is continuous integration (CI) platform that software development teams use to automatically build and test code changes. With Travis CI, developers can get immediate feedback on the success of a change.`
})
});

app.get('/Helios', (req, res) => {
    res.status(200).send({
        Partners:'Helios',
        PartnerLevel:'integration',
        Description:`Helios is an observability, troubleshooting, and testing platform for microservices. Using distributed tracing, developers can pinpoint and analyze issues, reproduce scenarios and then generate tests for APIs, microservices, messaging systems, data pipelines, and databases.`
})
});

app.get('/Appmap', (req, res) => {
    res.status(200).send({
        Partners:'Appmap',
        PartnerLevel:'integration',
        Description:`AppMap is an open source tool thousands of developers use to visualize their application’s runtime behavior. Unlike static analyzers, AppMap records how an application runs and uses that information to find design flaws, security holes, and performance issues.`
})
});

app.get('/APIsec', (req, res) => {
    res.status(200).send({
        Partners:'APIsec',
        PartnerLevel:'integration',
        Description:`EthicalCheck from APIsec is a free and instant API penetration testing service. It is offered as self-service, fully automated, and requires no signup. And, it’s user-friendly with an intuitive web UI, an API, and a GitHub action to integrate API security testing in dev workflows.`
})
});

app.get('/Workato', (req, res) => {
    res.status(200).send({
        Partners:'Workato',
        PartnerLevel:'integration',
        Description:`Need from Partner`
})
});

app.get('/Speedscale', (req, res) => {
    res.status(200).send({
        Partners:'Speedscale',
        PartnerLevel:'integration',
        Description:`Speedscale can export and import traffic in the open source Postman collection format. This lets you use your familiar tools to send test transactions to your app with traffic that was collected by Speedscale.`
})
});

app.get('/Pynt', (req, res) => {
    res.status(200).send({
        Partners:'Pynt',
        PartnerLevel:'Integration',
        Description:`https://www.youtube.com/watch?v=YWB57GHOPHU&ab_channel=Pynt`
})
});


app.post('allpartners/:id',(req, res) => {
    const{id} = req.params;
    const{logo} = req.body;

    if(!logo) {
        res.status(418) .send ({message: 'we need a logo!'})
    }
    res.send({
        allpartners: ` there is no logo for all partners because they are all different! ${logo} and ID of ${id}`,
    });
});

