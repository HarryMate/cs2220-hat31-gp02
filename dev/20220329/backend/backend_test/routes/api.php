<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\DB;

Route::post('register', function (Request $request) {
    $info = [
        'success' => false,
        'token' => null,
        'debug' => null
    ];

    $user = User::where('uid', $request->username)->first();
    $email = User::where('email', $request->email)->first();

    if ($user == null && $email == null && $request->password == $request->conPass) {
        User::create([
            'uid'=>$request->username,
            'email'=>$request->email,
            'password'=>Hash::make($request->password),
            'role'=>$request->role
        ]);
        
        $info['success'] = true;
        //$token = $user->createToken($user->id)->plainTextToken;
        return [
            'success' => true,
            //'token' => $token,
            'debug' => DB::table('users')->where('uid', '=', $request->username)->get(),
        ];
    } else {
        return [
            'success' => false,
            'debug' => null,
        ];
    }
});

Route::post('login', function (Request $request) {

    $info = [
        'success' => false,
        'token' => null,
    ];

    $user = DB::table('users')->where('uid', '=', $request->email)->first();

    if (!empty($user) && Hash::check($request->password, $user->password)) {
        $info['success'] = true;
        //$token = $user->createToken($user->id)->plainTextToken;
        return [
            'success' => true,
            //'token' => $token,
        ];
    } else {
        return [
            'success' => false,
        ];
    }
});

Route::middleware('auth:sanctum')->get('/auth-user', function (Request $request) {
    return $request->user();
});
