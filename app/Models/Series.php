<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Series extends Model
{
    protected $table = "series";
    protected $primaryKey = "id";
    protected $keyType = "int";
    public $timestamp = true;
    public $incrementing = true;
    protected $fillable = [
        'name',
        'episode',
        'release_date',
        'rating',
        'duration',
        'synopsis',
        'link_trailer',
        'image'
    ];

    public function genres()
    {
        return $this->belongsToMany(Genre::class, 'series_genre', 'series_id', 'genre_id');
    }
    public function casts()
    {
        return $this->belongsToMany(Cast::class, 'series_cast', 'series_id', 'cast_id');
    }
}
