# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)



# @pedido = Order.create(name: "Big mac",
#   qtd_order: 12,
#   price: 12.3,
#   sold: true,
#   date_buy: "2023-01-12",
#   desc: "com fritas",
# )

# puts @pedido

Order.delete_all 

20.times do
  Order.create(
    name: Faker::Food.dish,
    qtd_order: Faker::Number.between(from: 0, to: 100),
    price: Faker::Number.decimal(l_digits: 2),
    sold: Faker::Boolean.boolean,
    date_buy: Faker::Date.between(from: '2014-09-23', to: '2022-09-25'),
    desc: Faker::Food.description,
  )
end

Order.all.each do |pedido|
  puts "************************************************"
  puts "Nome do pedido: #{pedido.name}"
  puts "Quantidade:  #{pedido.qtd_order}"
  puts "Preço total: #{pedido.price}"
  puts "Vendido: #{pedido.sold}"
  puts "Data de compra: #{pedido.date_buy}"
  puts "Descrição: #{pedido.desc}"
end

