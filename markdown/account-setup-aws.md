# AWS

1. Log in to the [AWS Console](https://aws.amazon.com)
2. Navigate to the IAM service by finding it in the list, or typing it into the Service search box
3. On the IAM Dashboard, look for Sign-in URL. If it's using the numeric Account ID, click Customize and assign it the alias `{AWS Alias Name}` and click "Yes, Create" to save.
4. In the left sidebar, click Roles
5. Click the "Create Role" button
6. Type of trusted entity: Another AWS account
7. Account ID: `{AWS Account ID}`
8. Leave "Require external ID" uncheck
9. Check the "Require MFA" box
10. Click the "Next: Permission" button
11. Check the box next to the AdminstratorAccess policy
12. In the policy search box type "Billing"
13. Check the box next to the AWSBillingReadOnlyAccess policy
14. Click the "Next: Tags" button
15. Click the "Next: Review" button
16. Role name: `{AWS Role Name}`
17. Confirm that the two policies are listed: AdministratorAccess, AWSBillingReadOnlyAccess.
18. Click the "Create role" button
19. Click the newly created role name in the list
20. Copy the "Give this link..." URL and email it to me
