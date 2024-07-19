document.addEventListener('DOMContentLoaded', function() {
    var currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    var lastModifiedParagraph = document.getElementById('lastModified');
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = 'Last modified: ' + document.lastModified;
    }
});

const courses = [
    {
      courseName: "Japanese Language and Culture",
      duration: "12 weeks",
      price: "$600",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKx2_62fAkXMCCrz5Oa5D3-UfWRDmY9RET8w&s"
    },
    {
      courseName: "Introduction to Japanese Calligraphy",
      duration: "8 weeks",
      price: "$400",
      imageUrl: "https://schifferbooks.com/cdn/shop/products/9780764352188_300x300.jpg?v=1664400016"
    },
    {
      courseName: "Japanese Tea Ceremony: History and Practice",
      duration: "6 weeks",
      price: "$350",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8fv5U9gXWwf48b5NZUY3qQG_E0Jv45R5jtg&s"
    },
    {
      courseName: "Advanced Japanese Grammar and Conversation",
      duration: "10 weeks",
      price: "$700",
      imageUrl: "https://img-c.udemycdn.com/course/240x135/4238788_ca15_2.jpg"
    }
];
  
  const courseContainer = document.getElementById('course-container');
  
  const displayCourses = (filteredCourses) => {
    courseContainer.innerHTML = '';
    filteredCourses.forEach(course => {
      const CourseCard = document.createElement('div');
      CourseCard.className = 'course-card';
  
      CourseCard.innerHTML = `
        <h2>${course.courseName}</h2>
        <p>Duration: ${course.duration}</p>
        <p>Price: ${course.price}</p>
        <img src="${course.imageUrl}" alt="${course.templeName}" loading="lazy">
      `;
  
      courseContainer.appendChild(CourseCard);
    });
  };

  window.onload = () => displayCourses(courses);