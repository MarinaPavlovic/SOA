package rs.ac.singidunum.comments.service;

import rs.ac.singidunum.comments.DTO.CommentDTO;

import java.util.List;

public interface ICommentService {

    CommentDTO createComment (CommentDTO commentDTO);
    List<CommentDTO> getAllApartmentsComm (Integer apartmentId);
    void delete (Integer commentId);

}
