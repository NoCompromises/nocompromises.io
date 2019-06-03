@extends('_layouts.master')

@section('body')
<h2 class="mt-5 mb-3">Software projects can be risky. We can help.</h2>

<p>When you are starting a project, you probably wonder ...</p>
<ul>
    <li>Which proposal should I accept?</li>
    <li>Will the project be on time and in budget?</li>
    <li>How do I know my developer is any good?</li>
</ul>

<p>Or maybe your project is already underway and you're not quite sure how it's going</p>
<ul>
    <li>Are we really "almost done?" I heard that last week.</li>
    <li>Why do things keep breaking? Didn't we fix that already?</li>
    <li>What happens when the project is done? Will I be locked into working with the same developer?</li>
</ul>

<p>Those are all valid concerns. Knowing these answers is half the battle.</p>

<h2 class="mt-5 mb-3">We have your back!</h2>

<p>Your expertise is running your business and you don't have time to waste.</p>

<p>Let us help you review proposals, interview developers, ask tough questions and be your trusted technical advisor.</p>

<h5 class="mt-5 mb-3">Send us a note and let us know what challenges you're facing.</h5>

<form name="contact" method="POST" netlify action="/thank-you">
    <div class="form-row form-group">
        <div class="col">
            <label for="name">Name</label>
            <input class="form-control" id="name" required autofocus name="name">
        </div>

        <div class="col">
            <label for="email">Email</label>
            <input type="email" class="form-control" required id="email" name="email">
        </div>
    </div>

    <div class="form-group">
        <label for="message">Tell us how we can help</label>
        <textarea class="form-control" rows="3" required id="message" name="message"></textarea>
    </div>

    <div class="form-group">
        <button class="btn btn-primary" type="submit">Send</button>
    </div>
</form>
@endsection
