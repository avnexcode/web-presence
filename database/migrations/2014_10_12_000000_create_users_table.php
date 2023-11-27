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
            $table->id();
            $table->string('name'); 
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->boolean('is_admin')->nullable();
            $table->boolean('is_manager')->nullable();
            $table->boolean('is_staff')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    
        Schema::create('admins', function (Blueprint $table) {
            $table->string('admin_id')->primary();
            $table->string('user_id');
            $table->string('arsip');
            $table->timestamps();
        });
        
        Schema::create('managers', function (Blueprint $table) {
            $table->string('manager_id')->primary();
            $table->string('user_id');
            $table->timestamps();
        });
        
        Schema::create('staff', function (Blueprint $table) {
            $table->string('staff_id')->primary();
            $table->string('user_id');
            $table->boolean('alfa');  
            $table->boolean('izin');  
            $table->boolean('sakit');  
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
