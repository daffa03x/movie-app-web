<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cast extends Model
{
    use HasFactory;
    protected $table = "cast";
    protected $primaryKey = "id";
    protected $keyType = "int";
    public $timestamp = true;
    public $incrementing = true;
    protected $fillable = ['name_cast','occupation','date_of_birth','place_of_birth'];

    public function movies()
    {
        return $this->belongsToMany(Movie::class, 'movie_cast', 'cast_id', 'movie_id');
    }
    public function series()
    {
        return $this->belongsToMany(Series::class, 'series_cast', 'cast_id', 'series_id');
    }
}
