<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Product;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name'     => 'Admin',
            'email'    => 'admin@freshmart.com',
            'password' => bcrypt('admin123'),
            'role'     => 'admin',
        ]);

        Product::create([
            'name'        => 'Fresh Apples',
            'category'    => 'fruits',
            'image_url'   => 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg',
            'description' => 'Crisp red apples, perfect for snacking.',
            'price'       => 120,
            'stock'       => 50,
        ]);

        Product::create([
            'name'        => 'Bananas',
            'category'    => 'fruits',
            'image_url'   => 'https://images.pexels.com/photos/3820836/pexels-photo-3820836.jpeg',
            'description' => 'Sweet ripe bananas.',
            'price'       => 80,
            'stock'       => 60,
        ]);

        Product::create([
            'name'        => 'Carrots',
            'category'    => 'vegetables',
            'image_url'   => 'https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg',
            'description' => 'Fresh crunchy carrots.',
            'price'       => 60,
            'stock'       => 40,
        ]);
    }
}
