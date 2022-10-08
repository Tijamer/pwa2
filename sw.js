self.addEventListener(
    'fetch', 
    function(event) {
       event.respondWith( 
                fetch('demo_json.php?x=31',
                    {
                       method: 'GET'
                    }
            ) 
        );
    }
); 