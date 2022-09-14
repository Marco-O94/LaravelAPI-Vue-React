<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->words(3, true),
            'description' => fake()->paragraphs(3, true),
            'image' => fake()->imageUrl(400, 225, 'animals', true, 'cats'),
            'price' => fake()->numberBetween(100, 1000),
            'featured' => fake()->boolean,
        ];
    }
}
