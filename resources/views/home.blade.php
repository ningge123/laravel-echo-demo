@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default" style="padding: 20px;">
                <chat-log :messages="messages"></chat-log>
                <chat-composer @insert-message="updateMessage"></chat-composer>
            </div>
        </div>
    </div>
</div>
@endsection
