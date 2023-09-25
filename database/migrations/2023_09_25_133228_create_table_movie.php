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
        Schema::create('movie', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('genre_id');
            $table->unsignedBigInteger('cast_id');
            $table->unsignedBigInteger('type_id');
            $table->string('name',255)->nullable(false);
            $table->string('episode',50)->nullable();
            $table->integer('tahun')->nullable();
            $table->integer('rating')->nullable();
            $table->string('duration')->nullable();
            $table->longText('synopsis')->nullable();
            $table->string('link_trailer')->nullable();
            $table->string('image')->nullable();
            $table->timestamps();

            $table->foreign("genre_id")->on("genre")->references("id");
            $table->foreign("cast_id")->on("cast")->references("id");
            $table->foreign("type_id")->on("type")->references("id");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('movie');
    }
};
