require 'open-uri'

pp 'Start seed!'

pp 'destroying previous seed data'
Ingredient.destroy_all

pp 'creating new seed data from api'

url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
json = JSON.parse(open(url).read)

json['drinks'].each do |name|
  Ingredient.create!(name: name['strIngredient1'])
end

pp 'Finish seed!'
