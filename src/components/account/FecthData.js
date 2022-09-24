if (user) {
    const docRef = doc(db, `customers`, user.uid);
    getDoc(docRef)
      .then((doc) => {
        //console.log(doc.data(),doc.id);
        setUserData(doc.data());
      })
      .catch((err) => console.log(err.message));
  }