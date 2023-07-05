package rs.ac.singidunum.comments.service;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.comments.DTO.CommentDTO;
import rs.ac.singidunum.comments.entity.CommentEntity;
import rs.ac.singidunum.comments.repository.ICommentRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommentService implements ICommentService{

    private final ModelMapper mapper;
    private final ICommentRepository repository;

    public CommentService(ModelMapper mapper, ICommentRepository repository) {
        this.mapper = mapper;
        this.repository = repository;
    }

    @Override
    public CommentDTO createComment(CommentDTO commentDTO) {
        CommentEntity commentEntity= repository.save(mapper.map(commentDTO,CommentEntity.class));
        return mapper.map(commentEntity, CommentDTO.class);
    }

    @Override
    public List<CommentDTO> getAllApartmentsComm(Integer apartmentId) {
        return mapper.map(repository.apartmentComments(apartmentId), new ArrayList<CommentDTO>().getClass());
    }

    @Override
    public void delete(Integer commentId) {
            repository.deleteById(commentId);
    }
}
