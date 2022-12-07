
require 'faker'

puts "🌱 Seeding data..."

puts "🌱 Seeded beans..."    

10.times do
    User.create(
        username: Faker::Internet.username(specifier: 7..12),
        email: Faker::Internet.email,
        password_digest: 'password',
        img: Faker::Avatar.image(size: "50x50", format: "jpg")
    )
end

10.times do
    Shop.create(
        address: Faker::Address.full_address,
        name: Faker::Company.name,
        review: Faker::Number.between(from: 1, to: 10)
    )
end


Bean.create(origin: 'Italy', name: 'Wake up honey', description: 'With a rich crema and an aromatic taste profile, the Super Crema blend offers a full body with notes of roasted hazelnut and brown sugar, and all the harmony of Italian espresso.', image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwYmVhbnxlbnwwfHwwfHw%3D&w=1000&q=80', roast: 'light', shop_id: Shop.ids.sample)
Bean.create(origin: 'Brazil', name: 'Carnival Coffee', description: 'A classic and time-honored dark roast with notes of rich molasses and caramel thats perfect for making classic espresso drinks.', image: 'https://images.unsplash.com/photo-1552346989-e069318e20a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZmZlZSUyMGJlYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60', roast: 'light', shop_id: Shop.ids.sample)
Bean.create(origin: 'Australia', name: 'Kangaroo Kup', description: 'Our Espresso Roast is crafted with beans sourced from multiple regions—Latin America and Asia-Pacific. The blending of beans from varied regions results in unique flavor combinations.', image: 'https://images.unsplash.com/photo-1629248989876-07129a68946d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZmZlZSUyMGJlYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60', roast: 'dark', shop_id: Shop.ids.sample)
Bean.create(origin: 'USA', name: 'Freeeeedom', description: 'We source 100% arabica beans when crafting our coffee. Each coffee bean requires a unique balance of temperature and time to reach its individual peak of aroma, acidity, body and flavor.', image: 'https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlJTIwYmVhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60', roast: 'dark', shop_id: Shop.ids.sample)
Bean.create(origin: 'South Africa', name: 'Nelsons Roast', description: 'More than a drink, a cup of Starbucks coffee is part of your coffee ritual. Its the start to a new day, or a reward at the end of a long one. Its a lazy weekend morning, or a reason to share a moment with friends. Whatever your moment, savor it.', image: 'https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlJTIwYmVhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60', roast: 'medium', shop_id: Shop.ids.sample)
Bean.create(origin: 'Spain', name: 'Corrida', description: ' The fresher the beans, the more satisfying the cup. Thats why our coffees are packed soon after roasting with a one-way freshness valve designed to deliver a high-quality experience at its flavorful best.', image: 'https://images.unsplash.com/photo-1607681034540-2c46cc71896d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZmZlZSUyMGJlYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60', roast: 'light', shop_id: Shop.ids.sample)



puts "✅ Done seeding!"