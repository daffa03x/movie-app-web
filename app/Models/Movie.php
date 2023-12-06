<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;
    protected $table = "movie";
    protected $primaryKey = "id";
    protected $keyType = "int";
    public $timestamp = true;
    public $incrementing = true;
    protected $fillable = [
        'name',
        'release_date',
        'rating',
        'duration',
        'synopsis',
        'link_trailer',
        'image'
    ];

    public function genres()
    {
        return $this->belongsToMany(Genre::class, 'movie_genre', 'movie_id', 'genre_id');
    }
    public function casts()
    {
        return $this->belongsToMany(Cast::class, 'movie_cast', 'movie_id', 'cast_id');
    }

}
