#This project is a website for a specialized cinema with a futuristic neon cyberpunk influence and strong Japanese vibes:

You can install this directory on your computer using the following commands:

git clone https://github.com/Jellawn/DWWM_ECF1_lucas.git

Requires node.js and SASS:

node init -y

node install sass

#Procedure for installing the site on the customer's hosting:

In order to publish the customer's site on their OVH hosting, follow the procedure below.

1- Retrieving the data required for hosting:

Go to the OVH website and log in to your account from the main page. In the left-hand column, click on Web Cloud, then select Hosting. Choose the one you intend to use to host the site, then select FTP-SSH.
Here you will find the information needed to connect to the OVH server, such as the link to the FTP SFTP server in the following format: “ftp.cluster021.hosting.ovh.net,” as well as the port, login, and password chosen beforehand.

2- Creating the folder in the database:

Now that we have retrieved the login details, let's go to our FTP client, SFTP client and connect to the database. On the left, we see our file reader, and on the right, the server. To create a subdomain, we will need to go down the tree structure of our database to “/www” and place the site folder there ,
which should give us the path “www/my_site_folder”.

3 - Create our subdomain in OVH

Once the folder has been created, all that remains is to give the root folder of the site to OVH. To do this, return to your Hosting and this time go to the Multisite tab, click on Actions > Add a domain or subdomain. A pop-up will open and ask us to select a registered domain. Click on the domain chosen earlier, name your subdomain, then give the access path to your site to OVH. Once this is done, all you have to do is check the options “Country IP” (adding the country where you are located), “Enable firewall,” and, if not already selected by default, “SSL.” Click Next and regenerate the SSL for your new subdomain by returning to General Information and clicking on the three dots in the “SSL Certificate” section.

Once the certificate has been successfully regenerated, your site is deployed! You can view it by going directly to the name you assigned it, which will take the following form: “subdomain_name.domain_name.extension.”
