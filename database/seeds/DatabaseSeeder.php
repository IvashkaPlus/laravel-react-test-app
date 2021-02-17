<?php

use App\Product;
use Faker\Factory;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * Seeds fake data for Products
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();

        // Create 20 product fake records
        for ($i = 0; $i < 15; $i++) {
            Product::create([
                'title' => $faker->sentence(3),
                'description' => $faker->paragraph,
                'price' => $faker->randomNumber(2),
                'availability' => $faker->boolean(50)
            ]);
        }
    }
}
