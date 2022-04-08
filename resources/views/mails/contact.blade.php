@component('mail::message')
    # Nuovo Messaggio

    **Email:** {{ $contact['email'] }}

    **Message: ** {{ $contact['message'] }}
@endcomponent