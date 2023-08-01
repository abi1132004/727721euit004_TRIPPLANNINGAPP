package com.courier.dao;

import com.courier.model.Parcel;

public interface ParcelDAO {
    void create(Parcel parcel);
    Parcel getParcelById(int parcelId);
    void updateParcel(Parcel parcel);
    void deleteParcel(int parcelId);
}
