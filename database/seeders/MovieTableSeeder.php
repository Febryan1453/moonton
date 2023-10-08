<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'Inception',
                'slug' => 'inception',
                'category' => 'Action',
                'video_url' => 'https://example.com/inception',
                'thumbnail' => 'https://example.com/inception.jpg',
                'rating' => 4.8,
                'is_featured' => true,
            ],
            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'shawshank-redemption',
                'category' => 'Drama',
                'video_url' => 'https://example.com/shawshank-redemption',
                'thumbnail' => 'https://example.com/shawshank-redemption.jpg',
                'rating' => 4.9,
                'is_featured' => true,
            ],
            [
                'name' => 'The Godfather',
                'slug' => 'the-godfather',
                'category' => 'Crime',
                'video_url' => 'https://example.com/the-godfather',
                'thumbnail' => 'https://example.com/the-godfather.jpg',
                'rating' => 4.7,
                'is_featured' => false,
            ],
            [
                'name' => 'Pulp Fiction',
                'slug' => 'pulp-fiction',
                'category' => 'Crime',
                'video_url' => 'https://example.com/pulp-fiction',
                'thumbnail' => 'https://example.com/pulp-fiction.jpg',
                'rating' => 4.5,
                'is_featured' => false,
            ],
            [
                'name' => 'The Matrix',
                'slug' => 'the-matrix',
                'category' => 'Sci-Fi',
                'video_url' => 'https://example.com/the-matrix',
                'thumbnail' => 'https://example.com/the-matrix.jpg',
                'rating' => 4.6,
                'is_featured' => true,
            ],
        ];

        Movie::insert($movies);
    }
}
