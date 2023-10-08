<?php

namespace Database\Seeders;

use App\Models\SubcriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubcriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subcriptionPlans = [
            [
                'name' => 'Basic',
                'price' => 200000,
                'active_period_in_months' => 3,
                'features' => json_encode([
                    'Feature1',
                    'Feature2',
                ]),
            ],
            [
                'name' => 'Premium',
                'price' => 800000,
                'active_period_in_months' => 3,
                'features' => json_encode([
                    'Feature1',
                    'Feature2',
                    'Feature3',
                    'Feature4',
                ]),
            ],
        ];
        SubcriptionPlan::insert($subcriptionPlans);
    }
}
