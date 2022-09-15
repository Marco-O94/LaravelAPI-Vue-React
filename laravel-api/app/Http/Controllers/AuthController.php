<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function register(Request $request) {
        $credentials = $request->validateWithBag('user',[
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email',
            'password' => 'required|string|confirmed|min:6'
        ], [
            'name.required' => 'Nome richiesto',
            'email.required' => 'Email richiesta',
            'password.required' => 'Password richiesta',
            'password.confirmed' => 'Le password non corrispondono',
            'email.unique' => 'Email già in uso',
            'password.min' => 'La password deve essere lunga almeno 6 caratteri',
        ]);
        $user = User::create([
            'name' => $credentials['name'],
            'email' => $credentials['email'],
            'password' => Hash::make($credentials['password'])
        ]);
        $token = $user->createToken('token')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }

    public function login(Request $request) {
        $credentials = $request->validateWithBag('user',[
            'email' => 'required|email',
            'password' => 'required'
        ], [
            'email.required' => 'Email richiesta',
            'password.required' => 'Password richiesta',
        ]);
        
        //Check email
        $user = User::where('email', $credentials['email'])->select('id','name','email','password')->first();

        //Check password
        if (!$user || !Hash::check($credentials['password'], $user->password)) {
            return response([
                'message' => 'Email o Password errati'
            ], 401);
        }

        $token = $user->createToken('token')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }

    public function logout() {
        Auth::user()->tokens()->delete();

        return response(201);

    }
}
