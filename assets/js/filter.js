$(document).ready(function() {
    // --- This block handles clicks on the main filter buttons ---
    $('.filter-btn').on('click', function(e) {
        // Prevent the button's default link behavior
        e.preventDefault();

        // Get the data-filter attribute value of the clicked button
        var filterValue = $(this).attr('data-filter');

        // --- Update the active state of the buttons ---
        // Remove the 'active' class from all buttons
        $('.filter-btn').removeClass('active');
        // Add the 'active' class to the clicked button
        $(this).addClass('active');

        // --- Perform the filtering logic ---
        if (filterValue === 'all') {
            // If "All" is clicked, show all publication items instantly
            $('.pub-item').show();
        } else {
            // Otherwise, hide all items instantly
            $('.pub-item').hide();
            // Then, instantly show only the items that have the matching class
            $('.pub-item.' + filterValue).show();
        }
    });

    // --- This block handles clicks on the tags under each publication ---
    $('.pub-tag').on('click', function() {
        // Get the text content of the clicked tag (e.g., "Style Transfer")
        var tagText = $(this).text();

        // Convert the text into a "slug" format that matches the data-filter values
        // (e.g., "Style Transfer" -> "style-transfer")
        var filterValue = tagText.toLowerCase().replace(/\s+/g, '-');

        // Find the main filter button at the top that corresponds to this tag
        var targetButton = $('.filter-btn[data-filter="' + filterValue + '"]');

        // If a matching button exists, programmatically click it
        if (targetButton.length > 0) {
            targetButton.click();
        }
    });
});
