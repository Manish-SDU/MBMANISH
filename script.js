        // JavaScript to update the year dynamically
        document.getElementById('year').textContent = new Date().getFullYear();

        // Function to calculate age
        function calculateAge(birthDate) {
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDifference = today.getMonth() - birthDate.getMonth();

            // Adjust age if the birthday hasn't occurred yet this year
            if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            return age;
        }

        // Birthdate
        const birthDate = new Date(2005, 3, 27); // Months are 0-indexed in JavaScript (April is 3)
        const age = calculateAge(birthDate);

        // Update the HTML with the calculated age
        document.getElementById('age').textContent = age;