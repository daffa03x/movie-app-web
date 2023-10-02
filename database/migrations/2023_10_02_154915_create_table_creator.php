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
        Schema::create('creator', function (Blueprint $table) {
            $table->id();
            $table->string('name_creator',100)->nullable(false);
            $table->string('occupation',50)->nullable();
            $table->date('date_of_birth')->nullable(false);
            $table->longText('place_of_birth')->nullable(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('creator');
    }
};
