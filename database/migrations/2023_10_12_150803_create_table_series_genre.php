<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('series_genre', function (Blueprint $table) {
            $table->unsignedBigInteger('series_id');
            $table->unsignedBigInteger('genre_id');
            $table->primary(['series_id', 'genre_id']);
            $table->foreign('series_id')->references('id')->on('series')->onDelete('cascade');
            $table->foreign('genre_id')->references('id')->on('genre')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('series_genre');
    }
};
