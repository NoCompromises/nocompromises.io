# AWS

## Initial account setup

Amazon has a [step-by-step guide for setting up an AWS account](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/).Carefully read and follow the instructions.

Most importantly, make sure to use a company email address, ideally a mailbox or distribution list that more than one person has access to. This will prevent a lot of problems down the road if you ever leave the company or lose access to your email account. It is also critical that you [enable multi-factor authentication](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html#id_root-user_manage_mfa) on the account.

When it asks for an account name, I recommend `{AWS Account Name}`.

There is no need to purchase a support plan at this time. We may recommend adding one later.

## Grant developer access

1. Log in to the [AWS Console](https://console.aws.amazon.com)
1. In the upper right, click your name, then Account in the drop-down menu
1. Scroll down to the "IAM User and Role Access to Billing Information" section.
1. Check the box to "Activate IAM access" and click Update to save. This will allow me to monitor account costs and set up alerts.
1. Next, navigate to the IAM service by typing it into the Service search box at the very top of the page.
1. On the IAM Dashboard, look for Sign-in URL. If it's using the numeric Account ID, click Customize and assign it the alias `{AWS Alias Name}` and click "Yes, Create" to save.
1. In the left sidebar, click Roles
1. Click the "Create Role" button
1. Type of trusted entity: AWS account
1. Change the toggle to "Another AWS account"
1. Enter Account ID: `{AWS Account ID}`
1. Leave "Require external ID" uncheck
1. Check the "Require MFA" box
1. Click the "Next: Permission" button
1. Check the box next to the AdminstratorAccess policy
1. In the policy search box type "Billing"
1. Check the box next to the AWSBillingReadOnlyAccess policy
1. Click the "Next: Tags" button
1. Click the "Next: Review" button
1. Role name: `{AWS Role Name}`
1. Confirm that the two policies are listed: AdministratorAccess, AWSBillingReadOnlyAccess.
1. Click the "Create role" button
1. Click the newly created role name in the list
1. Copy the "Give this link..." URL and email it to me
