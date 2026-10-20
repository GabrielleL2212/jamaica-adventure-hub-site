// ========================================================
// 1. DATA RESOURCE ARRAY (Added image links here)
// ========================================================
var adventures = [
    {
        title: "Dunn's River Falls Tour",
        category: "Water",
        description: "Climb the world-famous 600-foot cascading limestone terraces near Ocho Rios.",
        image: "https://plus.unsplash.com/premium_photo-1694475416817-825622d87f19?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        title: "Blue Mountain Peak Hike",
        category: "Mountain",
        description: "Trek up Jamaica's highest summit to view a breathtaking Caribbean sunrise.",
        image: "https://images.unsplash.com/photo-1557129603-ff35a0c70e5e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        title: "Seven Mile Beach Relaxation",
        category: "Beach",
        description: "Bask along miles of pure, unbroken white sand and pristine turquoise waves.",
        image: "https://plus.unsplash.com/premium_photo-1681223447383-402912b83029?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        title: "Martha Brae River Rafting",
        category: "Water",
        description: "Glide peacefully on a 30-foot handmade bamboo raft steered by a local guide.",
        image: "https://images.unsplash.com/photo-1668115118877-ca2946340036?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    }
];

// ========================================================
// 2. WAIT FOR WEBSITE TO RUN OFFLINE
// ========================================================
window.onload = function() {
    var container = document.getElementById("adventure-container");
    if (container) {
        showCards("all");
        setupButtons();
    }

    var form = document.getElementById("booking-form");
    if (form) {
        setupValidation();
    }
};

// ========================================================
// 3. GENERATE BLOCKS WITH SIMPLE STRINGS
// ========================================================
function showCards(chosenCategory) {
    var container = document.getElementById("adventure-container");
    container.innerHTML = ""; 

    for (var i = 0; i < adventures.length; i++) {
        var currentItem = adventures[i];

        if (chosenCategory === "all" || currentItem.category === chosenCategory) {
            var cardHTML = 
                '<div class="card-custom">' +
                    // 🌟 EXPELLED PLACEHOLDER AND INSURTED REAL IMAGE TAG HERE:
                    '<img src="' + currentItem.image + '" alt="adventure">' +
                    '<div class="card-content-box">' +
                        '<div>' +
                            '<h3 class="card-title-text">' + currentItem.title + '</h3>' +
                            '<p class="card-description-text">' + currentItem.description + '</p>' +
                        '</div>' +
                        '<span class="badge-custom">' + currentItem.category + '</span>' +
                    '</div>' +
                '</div>';
            
            container.innerHTML += cardHTML;
        }
    }
}

// ========================================================
// 4. MOUSE EVENT HANDLERS
// ========================================================
function setupButtons() {
    var buttons = document.getElementsByClassName("btn-custom");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {
            for (var j = 0; j < buttons.length; j++) {
                buttons[j].classList.remove("active");
            }
            this.classList.add("active");

            var categoryToFilter = this.getAttribute("data-category");
            showCards(categoryToFilter);
        };
    }
}

// ========================================================
// 5. REGISTRATION VERIFICATION INTERACTION
// ========================================================
function setupValidation() {
    var form = document.getElementById("booking-form");
    var alertBox = document.getElementById("success-alert");

    form.onsubmit = function(event) {
        event.preventDefault();

        var nameInput = document.getElementById("fullName").value;
        var emailInput = document.getElementById("email").value;
        var selectField = document.getElementById("adventureSelect").value;

        // Simple form validation logic checking for empty constraints
        if (nameInput === "" || emailInput === "" || selectField === "") {
            alert("Please fill out all empty required registration form items before completing booking.");
        } else {
            form.classList.add("hidden");
            alertBox.classList.remove("hidden");
        }
    };
}
