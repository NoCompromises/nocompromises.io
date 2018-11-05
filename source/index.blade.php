@extends('_layouts.master')

@section('body')
<p>Work with an experienced technology partner that is reliable and cares about quality.</p>
<p>Send us a note and let us know how we can help.</p>

<form name="contact" method="POST" netlify action="/thank-you">
    <p>
        <label>Your Company:<br/><input type="text" name="company" required size="50" /></label>
    </p>
    <p>
        <label>Your Name:<br/><input type="text" name="name" required size="50" /></label>
    </p>
    <p>
        <label>Your Email:<br/><input type="email" name="email" required size="50" /></label>
    </p>
    <p>
        <label>Message:<br/><textarea name="message"  required rows="3" cols="50"></textarea></label>
    </p>
    <p>
        <button type="submit">Send</button>
    </p>
</form>
@endsection
