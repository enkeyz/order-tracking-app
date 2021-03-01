# order-tracking-app

FireStore rules
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /order-list/{document=**} {
  		allow read, write, update: if request.auth != null && resource.data.userId == request.auth.uid;
      allow create: if request.auth != null;
    }
  }
}
```

[![Netlify Status](https://api.netlify.com/api/v1/badges/f17dc075-8ef3-4617-9ac2-c992df7efa85/deploy-status)](https://app.netlify.com/sites/enkeyz-order-tracking-app/deploys)