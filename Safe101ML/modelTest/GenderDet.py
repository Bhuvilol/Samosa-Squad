from tensorflow.keras.preprocessing.image import img_to_array
from tensorflow.keras.models import load_model
import numpy as np
import cv2
import os
import cvlib as cv

model = load_model('gender_detection.keras')

webcam = cv2.VideoCapture(0)
i = 0
while(True):
    status, frame = webcam.read()
    f, confidence = cv.detect_face(frame)
    classes = ['man', 'woman']
    D = {}
    print(f)
    for i in range(len(f)):
        (startX, startY) = f[i][0], f[i][1]
        (endX, endY) = f[i][2], f[i][3]

        # draw rectangle over face
        cv2.rectangle(frame, (startX, startY), (endX, endY), (0, 255, 0), 2)
        # crop the detected face region
        face_crop = np.copy(frame[startY:endY, startX:endX])
        face_crop = cv2.resize(face_crop, (96, 96))
        face_crop = face_crop.astype("float") / 255.0
        face_crop = img_to_array(face_crop)
        face_crop = np.expand_dims(face_crop, axis=0)

        # apply gender detection on face
        conf = model.predict(face_crop)[0]  # model.predict return a 2D matrix, ex: [[9.9993384e-01 7.4850512e-05]]

        # get label with max accuracy
        idx = np.argmax(conf)
        label = classes[idx]

        label = "{}: {:.2f}%".format(label, conf[idx] * 100)
        print(label)
        if classes[idx] in D:
            D[classes[idx]] += 1
        else:
            D[classes[idx]] = 1
        print(D)
    # cv2.imshow("Gender detection", frame)
    # if cv2.waitKey(1) & 0xFF == ord('q')
    if i == 10:
        break

    i = 1
    cv2.waitKey(1)
webcam.release()
cv2.destroyAllWindows()