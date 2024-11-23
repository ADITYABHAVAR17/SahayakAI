# **SahayakAI**

SahayakAI is an AI-driven citizen services platform designed to simplify access to government schemes and services for rural citizens. The platform aims to bridge the gap between government resources and citizens by providing personalized recommendations, document verification, and step-by-step assistance in multiple regional languages.

---

## **Features**

### Citizen-Facing Features:
1. **Personalized Eligibility Assessment**  
   - Matches user profiles (age, income, family size, etc.) with government schemes.
   - Provides ranked recommendations using the MyScheme API.

2. **Automated Document Verification**  
   - Allows users to upload documents (Aadhaar, income certificates, etc.) for AI-driven validation.
   - Extracts and verifies data using OCR technology.

3. **Step-by-Step Application Assistance**  
   - Generates pre-filled forms based on user data.
   - Offers clear instructions for completing applications.

4. **Notifications and Updates**  
   - Sends updates via SMS, WhatsApp, or email for application status, deadlines, and appointments.

5. **Localization and Accessibility**  
   - Supports regional languages (e.g., Hindi and rural dialects).  
   - Provides offline access for low-connectivity areas using local storage or SMS-based interaction.

### Admin Features:
1. **Scheme Management**  
   - Allows government officials to add, update, and manage schemes and eligibility criteria.

2. **Analytics Dashboard**  
   - Displays usage statistics, citizen engagement, and scheme performance insights.

---

## **Project Structure**


---

## **Technologies Used**

### **Frontend**
- **React.js**: For the web portal.
- **React Native**: For the mobile app.

### **Backend**
- **Node.js** and **Express.js**: For microservices architecture.
- **API Gateway**: For communication between microservices.

### **Database**
- **PostgreSQL**: For structured data (schemes, applications).
- **MongoDB**: For user profiles and document metadata.

### **AI and Notifications**
- **TensorFlow/PyTorch**: For recommendation engine.
- **Google Vision API/Tesseract**: For OCR-based document verification.
- **Twilio API**: For SMS and WhatsApp notifications.
- **SendGrid**: For email notifications.

### **Hosting**
- **AWS** or **Google Cloud**: For scalable hosting.

### **Version Control and CI/CD**
- **GitHub**: For version control.
- **GitHub Actions/Jenkins**: For CI/CD.

---

## **Setup Instructions**

### Prerequisites:
1. **Node.js** (v18 or higher)
2. **npm** or **yarn**
3. **PostgreSQL** and **MongoDB** installed locally or on the cloud.
4. API keys for:
   - MyScheme API
   - Google Vision API
   - Twilio
   - SendGrid

### Steps to Run:
1. **Clone the repository**:
   ```bash
   git clone https://github.com/ADITYABHAVAR17/SahayakAI.git
   cd Sahayakai
   npm install
