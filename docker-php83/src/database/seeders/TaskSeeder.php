<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tasks')->insert([
            [
                'title' => 'Buy groceries',
                'description' => 'Purchase milk, eggs, and bread.',
                'status' => 'pending',
                'due_date' => '2025-11-13',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Clean the house',
                'description' => 'Vacuum the floor and organize the living room.',
                'status' => 'in_progress',
                'due_date' => '2025-11-12',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Finish Laravel project',
                'description' => 'Complete and test all CRUD operations.',
                'status' => 'completed',
                'due_date' => '2025-11-10',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
