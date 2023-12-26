<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cast>
 */
class CastFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name_cast' => fake()->name(),
            'occupation' => fake()->randomElement(['Aktor', 'Aktris']),
            'date_of_birth' => fake()->dateTimeBetween('-40 year', '-10 year'),
            'place_of_birth' => fake()->city(),
        ];
    }
}
