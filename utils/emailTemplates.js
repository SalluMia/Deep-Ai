export const contactUsEmail = (userDetails) => {
  return `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="utf-8">
            <title>Contact Us Inquiry</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                margin: 0;
                padding: 0;
                color: #333;
            }
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border-radius: 4px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
    
            h2 {
                color: black;
                margin-bottom: 20px;
            }
    
            p {
                margin-bottom: 10px;
            }
    
            .user-details {
                margin-top: 20px;
                padding: 10px;
                background-color: #fff;
                border: 1px solid #ddd;
                border-radius: 4px;
            }
    
            .detail-label {
                font-weight: bold;
                margin-bottom: 5px;
            }
    
            .detail-value {
                margin-bottom: 10px;
                margin-left:3px;
            }
    
            .footer {
                margin-top: 30px;
                text-align: center;
                color: #333;
            }
            .main{
                display:flex;
                align-items:center;
                justify-content:center;
            }
        </style>
        </head>
        
        <body>
            <div class="container">
                <h2>Contact Us Inquiry</h2>
                <p>Hello,</p>
                <p>You have received a new inquiry from a user. Here are the details:</p>
        
                <div class="user-details">
                <div class="main">
                    <p class="detail-label">Name:</p>
                    <p class="detail-value">${userDetails?.name}</p>
        </div>
        <div  class="main">
                    <p class="detail-label">Email:</p>
                    <p class="detail-value">${userDetails?.email}</p>
                    </div>
                    
                    <p class="detail-label">Message:</p>
                    <p class="detail-value">${userDetails?.message}</p>
                </div>
        
                <p class="footer">Please respond to the user promptly. Thank you!</p>
            </div>
        </body>
        
        </html>
        `;
};
