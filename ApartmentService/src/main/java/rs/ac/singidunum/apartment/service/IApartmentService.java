package rs.ac.singidunum.apartment.service;

import rs.ac.singidunum.apartment.entity.ApartmentEntity;
import rs.ac.singidunum.apartment.model.*;

import java.util.ArrayList;
import java.util.List;

public interface IApartmentService {

    Apartment convertApartmantEntitytoApartment (ApartmentEntity apartmentEntity, List<ApartmentImages> apartmentImages);
    Apartment GetApartmentById (Integer id);
    Apartment CreateApartment (CreateApartmentModel apartment);
    void DeleteApartment (Integer id);
    List<Apartment> AllApartments ();
    List<Apartment> ApartmentDestinationFilter (RequestDestinationType type);
    List<Apartment> GetUserApartments(Integer id);
    List<CreateApartmentModel> ApartmentReservations(RequestUserReservations apartmentsId);
    void deleteApartmentsWhenUserIsDelete (Integer id);





}
