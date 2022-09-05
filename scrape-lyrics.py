import requests
from bs4 import BeautifulSoup

response = requests.get("https://www.azlyrics.com/lyrics/iu/redqueen.html")

# print(response.status_code)

#print("response is", response.text)

soup = BeautifulSoup(response.text, 'html.parser')

print(soup, "soup is")

italic_title = soup.find_all('i')

for i in italic_title:
    if i.string.find('[English translation:]'):
        return 