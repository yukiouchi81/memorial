#post request :https://the-internet.herokuapp.com/authenticate
#get request: https://the-internet.herokuapp.com/secure

import requests
from bs4 import BeautifulSoup
loginurl = ("https://the-internet.herokuapp.com/authenticate")
secure_url = ("https://the-internet.herokuapp.com/secure")
urr = ("https://webscraper.io/test-sites/tables")
payload = {
    "username" : "tomsmith",
    "password" : "SuperSecretPassword!"
    }

r = requests.get(urr)
soup = BeautifulSoup(r.text, "html.parser")
item = soup.findAll("td")
for items in item:
    print (items.text)

#with requests.session() as s:
    #s.post(loginurl , data =payload)
    
    #r = s.get(secure_url)
   # soup = BeautifulSoup(r.content, "html.parser")
    #print (soup.prettify())
    
    