<?php

use Brick\Math\BigInteger;
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
        Schema::create('users', function (Blueprint $table) {
            $table->string('nik')->primary();
            $table->string('name');
            $table->string('email')->unique(); 
            $table->timestamp('email_verified_at')->nullable();
            $table->string('profile_image')->nullable();
            $table->string('address')->nullable();
            $table->string('phone')->unique()->nullable();
            $table->string('gender')->nullable();
            $table->string('old')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
        
        Schema::create('positions', function (Blueprint $table) {
            $table->id();
            $table->string('position');
            $table->timestamps(); 
        });
        
        Schema::create('user_positions', function (Blueprint $table) {
            $table->id();
            $table->string('user_nik');
            $table->foreign('user_nik') 
                ->references('nik')->on('users')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreignId('position_id')
                ->constrained('positions')
                ->onDelete('cascade')
                ->onUpdate('cascade');  
            $table->timestamps();
        });
        
        Schema::create('admins', function (Blueprint $table) {
            $table->string('admin_id')->primary();
            $table->foreignId('position_id')
                ->constrained('positions')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->string('arsip');
            $table->timestamps();
        }); 
        
        Schema::create('staff', function (Blueprint $table) {
            $table->string('staff_id')->primary();
            $table->foreignId('position_id')
                ->constrained('positions')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->timestamps();
        });

        Schema::create('attendances', function (Blueprint $table) {
            $table->id();
            $table->string('user_nik');
            $table->foreign('user_nik')
                ->references('nik')->on('users')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->string('presensi');
            $table->date('date');
            $table->time('time');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
